import { Button } from 'antd';
import { connect } from 'dva';

function mapStateToProps(state) {
  return {
    userInfo: state.global.userInfo,
  };
}

export default connect(mapStateToProps)(({ dispatch, userInfo }) => {
  return (
    <div>
      <h1>Login Page</h1>
      <Button
        onClick={() => {
          dispatch({
            type: 'global/getUserInfo',
          });
        }}
      >
        查看用户信息
      </Button>
      <Button
        onClick={() => {
          dispatch({
            type: 'global/login',
          });
        }}
      >
        Login
      </Button>
      {userInfo !== null && (
        <div>
          <div>
            <span>年龄:</span>
            <span>{userInfo.age}</span>
          </div>
          <div>
            <span>名字:</span>
            <span>{userInfo.name}</span>
          </div>
          <div>
            <span>性别:</span>
            <span>{userInfo.sex === '0' ? '男' : '女'}</span>
          </div>
        </div>
      )}
    </div>
  );
});
