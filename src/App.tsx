import './App.styl'

<<<<<<< HEAD
import { useNavCollapse, useToggle } from './hooks';
import classNames from 'classnames';
import ww from './assets/ww.svg'
import { MenuOutlined, DownOutlined } from '@ant-design/icons'
=======
// 模块划分
import Home from '@/pages/home/home'
>>>>>>> 0ad574db8ff62882ba85460bdc5d51ad351775ca

function App() {
  return (
    <>
<<<<<<< HEAD
      <header className="header">
        <h1 className="logo">
          <img src={ww} alt="" />
          <span>Xiewei</span>
        </h1>
        <nav className='nav'>
          {
            isCollapse ?
              (<div className='nav-list' onClick={setVisible}>
                <MenuOutlined  style={{ fontSize: '32px'}}/>
              </div>) :
              (<>
                <div className="nav-item">首页</div>
                <div className="nav-item">关于</div>
                <div className="nav-item">作品</div>
                <div className="nav-item">日志</div>
              </>)
          }
        </nav>
      </header>
      <section className="top-bgImg">
        <div className="middle-content">
          <h1 className="top-title">宁静致远.</h1>
          <div className="green-line"></div>
          <p className="top-desc">这里是谢微的个人主页</p>
        </div>
        <div className="toDown">
          <DownOutlined style={{fontSize: '32px'}}/>
        </div>
      </section>
      <section className={classNames("sidebar",visible && 'sidebar-enter')}>
        <div className="left-mask"></div>
        <div className="right-content">
          <div className="content-head">
            <MenuOutlined
              onClick={setVisible}
              onMouseEnter={setIsEnter}
              onMouseLeave={setIsEnter}
              style={{ 
                fontSize: '32px',
                padding:'10px 20px',
                marginRight: '36px',
                color: isEnter ? 'rgb(112, 192, 0)' : '#fff'
              }} />
          </div>
          <div className="content-list">
            <div className="content-item">首页</div>
            <div className="content-item">关于</div>
            <div className="content-item">作品</div>
            <div className="content-item">日志</div>
          </div>
        </div>
      </section>
      
=======
      <Home/>
>>>>>>> 0ad574db8ff62882ba85460bdc5d51ad351775ca
    </>
  )
}

export default App
