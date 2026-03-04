import type { IComponent } from "./dynamic-rendering.interfaces";

const mockResponse: IComponent = {
  type: "Container",
  data: {
    id: "4400936b-6158-1354-9dc8-a04c57e1af46",
    fluid: true,
    items: [
      {
        type: "Card",
        data: {
          id: "26b3f355-2f65-4aae-b9fd-609779f24fdd",
          title: "A custom title",
          headline: "A random Headline",
          copy: "A really long text....",
          items: [
            {
              type: "Button",
              data: {
                id: "btn-open",
                title: "Open Repo",
                className: "btn-primary",
                action: {
                  type: "openUrl",
                  url: "https://github.com/jean182/dynamic-rendering-example-react",
                },
              },
            },
          ],
        },
      },
      {
        type: "Divider",
        data: {
          id: "4400936b-6158-4943-9dc8-dsfhjs32723",
          marginY: 5,
        },
      },
      {
        type: "Card",
        data: {
          id: "4400936b-6158-4943-9dc8-a04c57e1af46",
          title: "Title",
          headline: "This can be anything",
          copy: "A really long text....",
          image: {
            url: "https://loserkid.io/static/76fc3e9f6912770889956f52c221765f/bab23/final-result.png",
          },
        },
      },
      {
        type: "Divider",
        data: {
          id: "4400936b-6158-4845-9dc8-dsfhjs32723",
          marginY: 5,
        },
      },
      {
        type: "Container",
        data: {
          id: "d76e3a5f-01ad-46f6-a45d-3ad9699ecf99",
          embeddedView: {
            type: "Input",
            data: {
              id: "26b3f355-2f65-4aae-b9fd-609779f24fdd",
              label: "Input",
              type: "password",
              placeholder: "Password",
              isRequired: false,
              minCharactersAllowed: 1,
              maxCharactersAllowed: 100,
              validations: [
                {
                  regexType: "eightOrMoreCharacters",
                  regexErrorCopy: "Use 8 or more characters",
                },
              ],
            },
          },
        },
      },
    ],
  },
};

export default mockResponse;
