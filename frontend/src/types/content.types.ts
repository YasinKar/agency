export interface Settings {
  id: string
  domain: string
  site_name: string
  site_logo: string
  site_description: string
  site_main_title: string
  rules : string
  about_us : string
  telegram: string | null
  twitter: string | null
  linkedin: string | null
  instagram: string | null
  github: string | null
  email: string | null
  phone : number | null
  copyright: string | null
}

export interface FAQ {
  id: string;
  question: string
  answer: string
}

