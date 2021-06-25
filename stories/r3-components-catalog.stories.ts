import { html, TemplateResult } from 'lit-html';
import '../src/r3-components-catalog.js';

export default {
  title: 'R3ComponentsCatalog',
  component: 'r3-components-catalog',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  title?: string;
  backgroundColor?: string;
}

const Template: Story<ArgTypes> = ({ title, backgroundColor = 'white' }: ArgTypes) => html`
  <r3-components-catalog style="--r3-components-catalog-background-color: ${backgroundColor}" .title=${title}></r3-components-catalog>
`;

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
