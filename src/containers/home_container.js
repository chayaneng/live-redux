import React, { Component } from 'react';
import { connect } from 'react-redux';
import { artistListAll, getArtistList } from '../actions';
import { bindActionCreators } from 'redux';
import Search from '../components/search';
import Artistlist from '../components/artistlist';

class HomeContainer extends Component { 

    componentWillMount() {
        this.props.artistListAll();
    }

    getKeywords = (event) => {
        let key = event.target.value;
        this.props.getArtistList(key);
        console.log(this.props);
    }

    render(){
        console.log(this.props);
        return (
            <div>
                <Search keywords={this.getKeywords}/>
                <Artistlist artists={this.props.artist.artistList}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        artist: state.artists
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        artistListAll,
        getArtistList
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);