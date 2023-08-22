export interface MenuWidgetInterface {
  title: string;
  color: string;
  type: string;
  logo: string;
  options: MenuOptions[];
}

export interface MenuOptions {
  name: string;
  logo: string;
  description: string;
  link: string;
  data: MenuSubOptions[];
}

export interface MenuSubOptions {
  title: string;
  options: MenuInsideOptions[];
}

export interface MenuInsideOptions {
  title: string;
  description: string;
  links: LinkElement[];
}

export interface LinkElement {
  name: string;
  link: string;
}
