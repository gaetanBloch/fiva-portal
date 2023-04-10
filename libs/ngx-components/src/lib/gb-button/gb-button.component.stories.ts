import { Meta, moduleMetadata, StoryFn } from '@storybook/angular';
import { GbButtonComponent } from './gb-button.component';
import { MatButtonModule } from '@angular/material/button';

export default {
  title: 'GbButtonComponent',
  component: GbButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [MatButtonModule],
    }),
  ],
} as Meta<GbButtonComponent>;

const Template: StoryFn<GbButtonComponent> = (args: GbButtonComponent) => ({
  props: {
    ...args,
  }
});

export const Primary = Template.bind({});
Primary.args = {
  text: 'Button',
}
