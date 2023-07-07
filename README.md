# custom-modal-component

[![npm version](https://img.shields.io/npm/v/custom-modal-component.svg)](https://www.npmjs.com/package/custom-modal-component)
[![GitHub repo](https://img.shields.io/badge/GitHub-Repo-blue.svg)](https://github.com/Peallyz/Projet14_HRnet)
[![VScode](https://img.shields.io/badge/IDE-VScode-blue.svg)](https://code.visualstudio.com/)
[![Node.js version](https://img.shields.io/badge/Node.js-8.5.0-green.svg)](https://nodejs.org/)

A customizable modal component for React.

This component is a modal that can be used to display any content. It provides a flexible and customizable solution for creating modals in your React applications.

## Installation

You can install the package using npm, pnpm, or yarn:

```bash
npm install custom-modal-component
pnpm install custom-modal-component
yarn add custom-modal-component
```

## Usage

```jsx
import CustomModal from "custom-modal-component";

// ...

function MyComponent() {
  const [showCustomModal, setShowCustomModal] = useState(false);

  return (
    <div>
      <CustomModal
        showCustomModal={showCustomModal}
        setShowCustomModal={setShowCustomModal}
        radius="10px"
        padding="20px"
        width="400px"
        height="300px"
        backgroundColor="#f1f1f1"
        color="#333333"
      >
        {/* Your content goes here */}
        {/* Example: */}
        <h1>Hello, world!</h1>
      </CustomModal>
    </div>
  );
}

export default MyComponent;
```

## Props

The following props are available for the `CustomModal` component:

- `showCustomModal` (required): A boolean value indicating whether the modal should be shown.
- `setShowCustomModal` (required): A function from the `useState` hook to control the visibility of the modal.
- `radius` (optional): The border radius of the modal. Defaults to `5px`.
- `padding` (optional): The padding of the modal. Defaults to `40px`.
- `width` (optional): The width of the modal. Defaults to `fit-content`.
- `height` (optional): The height of the modal. Defaults to `auto`.
- `backgroundColor` (optional): The background color of the modal. Defaults to `#ffffff`.
- `color` (optional): The text color of the modal. Defaults to `#000000`.

## Links

- [npm package](https://www.npmjs.com/package/custom-modal-component)
- [GitHub repository](https://github.com/Peallyz/custom_modal_OCp14)

## License

This project is licensed under the [MIT License](LICENSE).

For more information about the component and how to use it, please refer to the documentation and examples provided in this README. If you have any questions or need further assistance, feel free to reach out or visit the [GitHub repository](https://github.com/Peallyz/custom_modal_OCp14).
