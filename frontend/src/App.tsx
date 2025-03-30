import { RouterProvider } from "react-router-dom";
import { router } from "./Routers";

const App = () => {
  return (
    <div>
      <RouterProvider router={router} future={{ v7_startTransition: true }} />
    </div>
  );
};

export default App;
