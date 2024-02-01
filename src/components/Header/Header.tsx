import { memo } from "react";

const Header = memo(function Header(): React.JSX.Element {
  return (
    <h1 className="f1">RoboFriends</h1>
  )
})

export default Header;