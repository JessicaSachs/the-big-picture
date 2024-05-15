import { faker } from "@faker-js/faker";
import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import Accordion from "~/components/Accordion.vue";

const headerSelector = '[data-testid="accordion-header"]';
const contentSelector = '[data-testid="content"]';

describe("<Accordion />", () => {
  it("renders", () => {
    expect(mount(Accordion).exists()).toBeTruthy();
  });

  describe('props', () => {
    it("accepts a title prop", () => {
      const title = faker.lorem.sentence();
      const wrapper = mount(<Accordion title={title} />);
      expect(wrapper.text()).toContain(title);
    });
  })

  describe('slots', () => {
    describe('default', () => {
      it('does not show the default slot initially', () => {
        const wrapper = mount(<Accordion><div data-testid="content">Content should not be visible</div></Accordion>)
        expect(wrapper.find(contentSelector).exists()).toBeFalsy()
      })

      it('shows the default slot when the accordion is clicked', async () => {
        const wrapper = mount(<Accordion>
          <div data-testid="content">Content should be visible after interacting with the accordion header</div>
        </Accordion>)

        await wrapper.find(headerSelector).trigger('click')
        expect(wrapper.find(contentSelector).exists()).toBeTruthy()
      })
    })

    describe('header', () => {
      it('shows the header slot', () => {
        const contentText = faker.lorem.sentence()
        const headerText = 'Accordion Header is styled!'
        const wrapper = mount(<Accordion>
          <template v-slot:header>
              <div data-testid="scoped-header-slot">
                <div>{headerText}</div>
              </div>
          </template>
          { contentText }
        </Accordion>)

        expect(wrapper.find(headerSelector).text()).toContain(headerText)
      })
    })
  })
})
