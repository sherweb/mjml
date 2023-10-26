import { Social, SocialElement } from '@sherweb/mjml-social'
import { Navbar, NavbarLink } from '@sherweb/mjml-navbar'
import { Carousel, CarouselImage } from '@sherweb/mjml-carousel'
import {
  Accordion,
  AccordionElement,
  AccordionText,
  AccordionTitle,
} from '@sherweb/mjml-accordion'
import Body from '@sherweb/mjml-body'
import Head from '@sherweb/mjml-head'
import HeadAttributes from '@sherweb/mjml-head-attributes'
import HeadBreakpoint from '@sherweb/mjml-head-breakpoint'
import HeadHtmlAttributes from '@sherweb/mjml-head-html-attributes'
import HeadFont from '@sherweb/mjml-head-font'
import HeadPreview from '@sherweb/mjml-head-preview'
import HeadStyle from '@sherweb/mjml-head-style'
import HeadTitle from '@sherweb/mjml-head-title'
import Hero from '@sherweb/mjml-hero'
import Button from '@sherweb/mjml-button'
import Column from '@sherweb/mjml-column'
import Divider from '@sherweb/mjml-divider'
import Group from '@sherweb/mjml-group'
import Image from '@sherweb/mjml-image'
import Raw from '@sherweb/mjml-raw'
import Section from '@sherweb/mjml-section'
import Spacer from '@sherweb/mjml-spacer'
import Text from '@sherweb/mjml-text'
import Table from '@sherweb/mjml-table'
import Wrapper from '@sherweb/mjml-wrapper'
import dependencies from './dependencies'

const components = [
  Body,
  Head,
  HeadAttributes,
  HeadBreakpoint,
  HeadHtmlAttributes,
  HeadFont,
  HeadPreview,
  HeadStyle,
  HeadTitle,
  Hero,
  Button,
  Column,
  Divider,
  Group,
  Image,

  Raw,
  Section,
  Spacer,
  Text,
  Table,
  Wrapper,

  Social,
  SocialElement,
  Navbar,
  NavbarLink,
  Accordion,
  AccordionElement,
  AccordionText,
  AccordionTitle,
  Carousel,
  CarouselImage,
]

const presetCore = {
  components,
  dependencies,
}

export default presetCore
