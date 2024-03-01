import { FC } from "react";

interface IAuthLayout {
  children: React.ReactNode;
}

const AuthLayout: FC<IAuthLayout> = ({ children }) => {
  return (
    <div className="h-full flex items-center justify-center bg-tremor-background-emphasis">
      {children}
    </div>
  );
};

export default AuthLayout;
