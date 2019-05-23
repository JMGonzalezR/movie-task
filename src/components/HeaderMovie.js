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
                <div className="header-data">
                    
                    <div className={classes.sideMenu}>

                    </div>
                    <div className="header-content">
                        <div className="header-metadata">
                            <div className="flexbox row">
                                <img alt="rotten tomatos" src={data.metadata.rottenIcon}/>
                                <div>{data.metadata.rottenScore}</div>
                            </div>
                            <div className="flexbox row">
                                <img alt="age" src={data.metadata.ageRangeIcon}/>
                                <div>{data.metadata.ageRange}</div>
                            </div>
                            <div>
                                {data.metadata.duration}
                            </div>
                            <div>
                                {data.metadata.year}
                            </div>
                            <div>
                                <img alt="clasification" src={data.metadata.clasificationIcon}/>
                            </div>
                            <div>
                                <img alt="quality" src={data.metadata.qualityIcon}/>
                            </div>
                        </div>
                        <div className="header-description">
                            {data.description}
                        </div>
                        <div className="header-actions">
                                <button>{data.price}</button>
                                <button>{data.price}</button>
                                <button>{data.price}</button>
                                <button>{data.price}</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles (styles)(HeaderMovie);