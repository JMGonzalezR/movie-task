import React from 'react';
import {withStyles} from "@material-ui/core/styles";

const styles = theme =>({

    headerImage: {
        
        color: "#fff"
    },
    hero:{
        marginLeft: theme.spacing.unit *3,
        padding: `${theme.spacing.unit *8}px 0`
    },
    sideMenu:{},
    metadata:{}
})

class HeaderMovie extends React.Component {

    render(){
        const {classes, data} = this.props;
        return(
            <div className={classes.headerImage}>
                <img alt="header" src={data.image} className="header-image"/>  
                <div className="header-data flexbox row">
                    
                    <div className="sidemenu">
                        <div className="menu-section">
                            <div className="menu-item">
                                Menu Item
                            </div>
                            <div className="menu-subitem">
                                sub item
                            </div>
                        </div>
                        <div className="menu-section">
                            <div className="menu-item">
                                Menu Item
                            </div>
                            <div className="menu-subitem">
                                sub item
                            </div>
                            <div className="menu-subitem">
                                sub item
                            </div>
                        </div>
                        <div className="menu-section">
                            <div className="menu-item">
                                Menu Item
                            </div>
                            <div className="menu-subitem">
                                sub item
                            </div>
                            <div className="menu-subitem">
                                sub item
                            </div>
                            <div className="menu-subitem">
                                sub item
                            </div>
                            <div className="menu-subitem">
                                sub item
                            </div>
                        </div>
                    </div>
                    <div className="header-content">
                        <div className="header-metadata">
                            <div className="flexbox row">
                                <img alt="rotten tomatos" className="header-icon" src={data.metadata.rottenIcon}/>
                                <div>{data.metadata.rottenScore}</div>
                            </div>
                            <div className="flexbox row">
                                <img alt="age" src={data.metadata.ageRangeIcon} className="header-icon"/>
                                <div>{data.metadata.ageRange}</div>
                            </div>
                            <div>
                                {data.metadata.duration}
                            </div>
                            <div>
                                {data.metadata.year}
                            </div>
                            <div>
                                <img alt="clasification" src={data.metadata.clasificationIcon} className="header-icon"/>
                            </div>
                            <div>
                                <img alt="quality" src={data.metadata.qualityIcon} className="header-icon"/>
                            </div>
                            <div>
                                <img alt="" src={data.metadata.ccIcon} className="header-icon"/>
                            </div>
                            <div>
                                <img alt="" src={data.metadata.adIcon} className="header-icon"/>
                            </div>
                        </div>
                        <div className="header-description">
                            {data.description}
                        </div>
                        <div className="header-actions flexbox row">
                                <div >
                                    <button className="header-button"><i class="fas fa-play"></i></button>
                                    <div className="header-button-title">Title</div>
                                </div>
                                <div >
                                    <button className="header-button">{data.price}</button>
                                    <div className="header-button-title">Title</div>
                                </div>
                                <div >
                                    <button className="header-button"><i class="fas fa-plus-circle"></i></button>
                                    <div className="header-button-title">Title</div>
                                </div>
                                <div >
                                    <button className="header-button"><i class="fas fa-ellipsis-h"></i></button>
                                    <div className="header-button-title">Title</div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles (styles)(HeaderMovie);