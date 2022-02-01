import { StatsCardItem } from "./StatsCardItem";
import { TypeCardItem } from "./TypeCardItem";

export const CardGridItem = ( { name, stats, types, sprites } ) => {

    /* Arreglo de objetos de todos los stats del pokemon */
    const level = stats.map( st => {
        return{
            name:st.stat.name,
            lv:st.base_stat
        }
    });
    /* Partimos el arreglo de objetos para tener solo ataque y defensa */
    const attDef = level.splice(1, level.length - 4 );
    
    const tipo = types.map( type => {
        return{
            type:type.type.name
        }
    })
    
    return (

        <div className="col-4">
            <div className="card  mt-3">
                <div className="row  g-0 d-flex">
                    <div className="col-sm-8">
                        <div className="card-body">
                            <h5 className="card-title">{ name }</h5>
                            <div className="card-text">
                                {
                                    attDef.map( lv => <StatsCardItem key={lv.name} {...lv} /> )
                                }
                            </div>
                            <div>
                                {
                                    tipo.map( ti => <TypeCardItem key={ti.type} {...ti} />)
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <img className="card-img img-fluid" src={ sprites }  alt={ name } />
                    </div>
                    
                </div>
            </div>

            {/* <img src={ sprites } alt={name} />
            <p>{ name }</p> */}

            {/* {
                attDef.map( lv => <StatsCardItem key={lv.name} {...lv} /> )
            } */}

            {/* {
                tipo.map( ti => <TypeCardItem key={ti.type} {...ti} />)
            } */}
        </div>
    )
};
