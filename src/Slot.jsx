import './index.css'


const Slot = props =>{
    let {x,y,z} = props;
   
   
    const truePArt=(            
    <div className = "main">
    <h1>{x} {y} {z}</h1>
    <h1>This is matching</h1>
    <hr/>
    </div>)

    const falsePart =(
        <>
        <div className = "main">
            <h1>{x} {y} {z}</h1>
            <h1>This is not matching</h1>
            <hr/>
        </div>
        </>
    );

    if(x === y && y === z){
        return truePArt;
    }

    else{
        return falsePart
    }
};


export default Slot;