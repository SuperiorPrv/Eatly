import "../menu3Loading/style.css";

const Menu3loading = () => {
    return (
        <div className="bg-slate-300 max-w-[1440px] mx-auto absolute top-0 right-0 left-0 bottom-0 items-center flex justify-center h-[100vh]">
            <div className="main">
  <div className="up">
    <div className="loaders">
      <div className="load" />
      <div className="load" />
      <div className="load" />
      <div className="load" />
      <div className="load" />
      <div className="load" />
      <div className="load" />
      <div className="load" />
      <div className="load" />
      <div className="load" />
    </div>
    <div className="loadersB">
      <div className="loaderA">
            <div className="ball0" onClick={() => {
                window.location.href = 'https://prodeveloper21gen.github.io/Dev_Chathub/'
        }} />
      </div>
      <div className="loaderA">
        <div className="ball1" />
      </div>
      <div className="loaderA">
        <div className="ball2" />
      </div>
      <div className="loaderA">
        <div className="ball3" />
      </div>
      <div className="loaderA">
        <div className="ball4" />
      </div>
      <div className="loaderA">
        <div className="ball5" />
      </div>
      <div className="loaderA">
        <div className="ball6" />
      </div>
      <div className="loaderA">
        <div className="ball7" />
      </div>
      <div className="loaderA">
        <div className="ball8" />
      </div>
    </div>
  </div>
</div>

        </div>
    )
}

export default Menu3loading