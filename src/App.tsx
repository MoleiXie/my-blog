import 'normalize.css'
import './App.styl'
function App() {
  return (
    <>
      <header className="header">
        <h1 className="logo">Logo</h1>
        <nav className='nav'>
          <div className="nav-item">首页</div>
          <div className="nav-item">关于</div>
          <div className="nav-item">作品</div>
          <div className="nav-item">日志</div>
        </nav>
      </header>
      <section className="top-bgImg">
        <div className="middle-content">
          <h1 className="top-title">宁静致远.</h1>
          <div className="green-line"></div>
          <p className="top-desc">这里是谢微的个人主页</p>
        </div>
      </section>

    </>
  )
}

export default App
