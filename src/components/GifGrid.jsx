import { GifGridItem } from './GifGridItem';
import { useFectchGifs } from '../hooks/useFectchGifs';



export const GifGrid= ({category}) => {


    const { images, isLoading } = useFectchGifs(category);


    return (
    <>       
        <h3>{category}</h3>
        
        {
            isLoading && (<h2>Cargando...</h2>)
        }
        
        
        <div className="card-grid">
            {
                images.map((img) => (
                    <GifGridItem 
                        key={img.id}
                        {...img}
                    />
                ))
            }
        </div>

    </>
    )
}