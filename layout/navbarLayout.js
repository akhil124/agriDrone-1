import styles from "../styles/Layout.module.css";

export default function Layout({ children }) {
  return (
    <div className="">
      <div className="">{children}</div>
    </div>
  );
}
