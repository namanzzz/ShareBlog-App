

import { Sidebar } from '../../components/sidebar/Sidebar'
import { SinglePost } from '../../components/singlePost/SinglePost'
import './single.css'


export const Single = () => {
  return (
    <div className='single'>
         {/* post */}
        <SinglePost />
        <Sidebar />
    </div>
  )
}
