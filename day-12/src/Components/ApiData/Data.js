import React, { Component } from 'react'
import axios from 'axios'
// import '../App.css';
class DataList extends Component {
	constructor(props) {
		super(props)

		this.state = {
      albums: [],
      errorMsg: ''
		}
	}

	componentDidMount() {
		axios
			.get('https://api.spotify.com/v1/albums')
			.then(response => {
                console.log(response)
				console.log(response.data)
				this.setState({ albums: response.data})
			})
			.catch(error => {
        console.log(error)
        this.setState({errorMsg: 'Error retrieving data'})
			})
	}

	render() {
		const { albums, errorMsg } = this.state;
        console.log(albums.length)
		return (
            <div>
<<<<<<< HEAD
                {/* List of ALBUMS */}
=======
//                 List of ALBUMS
>>>>>>> dd0b35abf815ae4d5e7cadcf0e145d4c0de9b98c
                {
                    albums.map(a => <div key = {a.id} > {a.name} {a.album_type} {a.type}</div>)
                }
            </div>
        )
	}
}

export default DataList
