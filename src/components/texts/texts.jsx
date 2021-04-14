const Biography = [
    {id:1, nom:"Tondase", prenom:"Benjamin", biographie:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis quam delectus ex corrupti, atque officiis nobis eligendi, explicabo animi expedita aspernatur temporibus mollitia tempore nihil fugit, aliquam laboriosam sapiente facere!Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut placeat unde possimus et nesciunt magni iure, perferendis earum, omnis dicta tempore cupiditate distinctio maiores temporibus vitae atque iste aliquam reiciendis."},
    {id:2, nom:"Kota", prenom:"Rosaire", biographie:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis quam delectus ex corrupti, atque officiis nobis eligendi, explicabo animi expedita aspernatur temporibus mollitia tempore nihil fugit, aliquam laboriosam sapiente facere!Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut placeat unde possimus et nesciunt magni iure, perferendis earum, omnis dicta tempore cupiditate distinctio maiores temporibus vitae atque iste aliquam reiciendis."},
    {id:3, nom:"Silu", prenom:"Gislain", biographie:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis quam delectus ex corrupti, atque officiis nobis eligendi, explicabo animi expedita aspernatur temporibus mollitia tempore nihil fugit, aliquam laboriosam sapiente facere!Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut placeat unde possimus et nesciunt magni iure, perferendis earum, omnis dicta tempore cupiditate distinctio maiores temporibus vitae atque iste aliquam reiciendis."},
    {id:4, nom:"Armache", prenom:"Kevin", biographie:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis quam delectus ex corrupti, atque officiis nobis eligendi, explicabo animi expedita aspernatur temporibus mollitia tempore nihil fugit, aliquam laboriosam sapiente facere!Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut placeat unde possimus et nesciunt magni iure, perferendis earum, omnis dicta tempore cupiditate distinctio maiores temporibus vitae atque iste aliquam reiciendis."},
]

const Texts = (props) => {
    return <>
        <h2 classeName={props.classeName}><span>Benjamin </span><span>Tondase</span></h2>
        <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis quam delectus ex corrupti, atque officiis nobis eligendi, explicabo animi expedita aspernatur temporibus mollitia tempore nihil fugit, aliquam laboriosam sapiente facere!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut placeat unde possimus et nesciunt magni iure, perferendis earum, omnis dicta tempore cupiditate distinctio maiores temporibus vitae atque iste aliquam reiciendis.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure reprehenderit nesciunt explicabo odio ut repudiandae sint vel hic sunt, veniam reiciendis perspiciatis, sit fugiat minima, enim officiis maiores placeat numquam.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus culpa recusandae eos pariatur natus iste, quos id consectetur aliquid numquam adipisci reprehenderit enim sint? Libero non cupiditate ipsum reprehenderit nemo.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis saepe neque quos soluta, ullam fuga ipsum quis veniam eligendi quia, consequatur ratione voluptas nulla eos sint minima quae facilis reiciendis.
        </p>
    </>
}
export default Texts;