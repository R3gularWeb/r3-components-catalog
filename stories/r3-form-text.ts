import { html } from 'lit-element';
import 'r3-form-text/dist/r3-form-text';

export default {
  title: 'R3FormText',
};

const DefaultTemplate = ({}) =>
  html`
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&family=VT323&display=swap" rel="stylesheet"> 
    <r3-form-text></r3-form-text>
  `;

const DescriptionTemplate = ({}) =>
  html`
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&family=VT323&display=swap" rel="stylesheet"> 
    <r3-form-text
      with-label
      with-description
    ></r3-form-text>
  `;

const ChangeSizeTemplate = ({}) =>
  html`
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&family=VT323&display=swap" rel="stylesheet"> 
    <div style="width: 30%;">
      <r3-form-text
        with-label
        with-description
      ></r3-form-text>
    </div>
  `;

export const Default = DefaultTemplate.bind({});

export const WithDescriptionLabel = DescriptionTemplate.bind({});

export const ChangeSize = ChangeSizeTemplate.bind({});