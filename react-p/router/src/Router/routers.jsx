import React from 'react'
import { HashRouter, Routes ,Route, Navigate} from 'react-router-dom'
import Center from '../Views/center/center';
import Films from '../Views/films/films';
import Cinemas from '../Views/cinemas/cinemas';
import Nowplaying from '../Views/films/nowplaying/nowplaying';
import Notfound from '../Views/notfound/notfound';

export default function Routers() {

  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/films" element={<Films />} exact/>
          <Route path="/films/nowplaying" element={<Nowplaying />} />
          <Route path="/cinemas" element={<Cinemas />} />
          <Route path="/center" element={<Center />} />
          {/* 使用Redirect作为Route的子元素 */}
          <Route element={<Notfound/>}/>
          <Route path="/" element={<Navigate to="/films" />} />
        </Routes>
      </HashRouter>
    </div>
  )
}
