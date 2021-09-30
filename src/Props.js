import React, { Component } from 'react'
import Props1 from './Props1'
import './App.css'

export default class Props extends Component {
    render() {
        return (
            <div className="a">
                <Props1  name="Bhahubali"
                         image="https://wallpapercave.com/wp/wp1851897.jpg"
                         hero="Prabhas" 
                          />
                <Props1 name="gabbar singh"
                        image="https://img1.hotstarext.com/image/upload/f_auto,t_vl/sources/r1/cms/prod/old_images/vertical/MOVIE/2582/1000102582/1000102582-v"
                        hero="Pavan Kalyan" 
                        />
            </div>
        )
    }
}
