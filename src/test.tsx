import React from 'react';
import { Dimensions } from 'react-native';
import * as RNLocalize from 'react-native-localize';
import { getAppLanguage, getAppTheme, setAppLanguage, setAppTheme } from '../cache/LocalStorage';
import { Language, Theme } from '../variables/interfaces';
import THEMES from '../variables/themes';
const defaultState = {
  language: 'en',
  theme: THEMES.black,
  previousTheme: THEMES.black,
  updateLanguage: () => {},
  updateTheme: () => {},
  localize: () => {},
  screenSize: 'xs',
  isDataLoading: true,
};
type value = {
  language: string;
  theme: Theme;
  updateLanguage: (value: Language) => void;
  updateTheme: (value: Theme) => void;
  localize: (key: string, toUpperCase?: boolean) => any;
  screenSize: string;
  isDataLoading: boolean;
  previousTheme: Theme;
};
const GlobalContext = React.createContext<value>(defaultState);
const reactiveStateProxy = (component: any) =>
  new Proxy(defaultState, {
    set(obj: any, prop: any, value) {
      obj[prop] = value;
      component.setState({ context: reactiveStateProxy(component) });
      return true;
    },
  });
const translationGetters: any = {
  en: () => require('../../assets/translations/en.json'),
  ro: () => require('../../assets/translations/ro.json'),
  ru: () => require('../../assets/translations/ru.json'),
};
class GlobalProvider extends React.Component {
  constructor(props: any) {
    super(props);
  }
  componentDidMount() {
    const windowWidth = Dimensions.get('window').width;
    if (windowWidth <= 360) {
      this.state.context.screenSize = 'xs';
    } else if (windowWidth <= 400) {
      this.state.context.screenSize = 'sm';
    } else if (windowWidth > 400) {
      this.state.context.screenSize = 'xl';
    }
    getAppLanguage().then((storedLanguage: Language) => {
      let setLanguage = defaultState.language;
      const deviceLanguage = RNLocalize.getLocales();
      if (storedLanguage && !(storedLanguage instanceof Error)) {
        setLanguage = storedLanguage.languageTag;
      } else {
        if (Array.isArray(deviceLanguage)) {
          setLanguage = deviceLanguage[0].languageCode;
        }
      }
      if (!translationGetters[setLanguage]) {
        setLanguage = defaultState.language;
      }
      this.state.context.language = setLanguage;
    });
    getAppTheme().then((storedTheme: Theme) => {
      if (storedTheme && !(storedTheme instanceof Error)) {
        this.state.context.theme = storedTheme;
        this.state.context.previousTheme = storedTheme;
      } else {
        this.state.context.theme = THEMES.black;
        this.state.context.previousTheme = THEMES.black;
      }
    });
    this.state.context.isDataLoading = false;
  }
  state = {
    context: reactiveStateProxy(this),
  };
  public updateLanguage = async (value: Language) => {
    this.state.context.isDataLoading = true;
    await setAppLanguage(value);
    this.state.context.language = value.languageTag;
    this.state.context.isDataLoading = false;
  };
  public updateTheme = async (value: Theme) => {
    this.state.context.isDataLoading = true;
    await setAppTheme(value);
    this.state.context.previousTheme = this.state.context.theme;
    this.state.context.theme = value;
    this.state.context.isDataLoading = false;
  };
  public localize = (key: string, toUpperCase: boolean = false) => {
    const language = translationGetters[this.state.context.language]();
    let text = language[key];
    return toUpperCase ? text.toUpperCase() : text;
  };
  public render() {
    const { language, theme, screenSize, isDataLoading, previousTheme } = this.state.context;
    const value = {
      language,
      theme,
      updateLanguage: this.updateLanguage,
      updateTheme: this.updateTheme,
      localize: this.localize,
      screenSize,
      isDataLoading,
      previousTheme,
    };
    return <GlobalContext.Provider value={value}>{this.props.children}</GlobalContext.Provider>;
  }
}
export { GlobalContext, GlobalProvider };
