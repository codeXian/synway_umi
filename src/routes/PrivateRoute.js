export default props => {
  return (
    <div>
      {/* 可以用来做一些权限校验 */}
      <div>PrivateRoute (routers/PrivateRoute.js)</div>
      {props.children}
    </div>
  );
};
