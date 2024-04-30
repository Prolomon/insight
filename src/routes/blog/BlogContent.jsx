import { Heart, Download, Share2 } from "react-feather"
import More from "./More"

const BlogContent = ({avatar, bgImg}) => {
  return (
    <div className="w-full h-auto bg-gray-100 overflow-hidden">
        <div className="w-10/12 mx-auto py-6">
            <h1 className="text-3xl font-black leading-7 capitalize">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius dicta alias numquam, a rem nemo magni.</h1>
            <div className="flex items-center justify-between my-2">
                <div className="flex items-center gap-2">
                    <img src={avatar} className="w-8 h-8 rounded-full border-2 border-green-700" />
                    <h4 className=""><strong>Prolomon</strong></h4>
                </div>
                <p className="capitalize text-gray-600">apr 10, 2024</p>
            </div>
            <div className="w-full">
                <img src={bgImg} className="w-full rounded-md mx-auto" />
            </div>
            <div className="">
                <p className="leading-8 text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi quas sapiente magni impedit exercitationem facilis ipsam fugiat maxime incidunt tempore? Magnam, natus eum, cum vitae itaque molestiae sunt voluptas id, eligendi laborum rerum adipisci unde sapiente! Iure explicabo quisquam incidunt odit nemo libero voluptate doloremque reiciendis ea, quidem maiores atque sapiente debitis accusamus nihil ipsum laudantium veritatis temporibus fugiat. Mollitia, ut odio ducimus impedit at maiores veniam doloribus facilis accusantium, nisi vitae, placeat sunt ab beatae. Obcaecati eaque aspernatur repudiandae labore voluptate natus dolorem ut blanditiis cupiditate molestiae iste dolorum tempora dignissimos vero a nesciunt quo nisi voluptatem, aut praesentium quasi. Dicta ab amet tempora harum quidem assumenda nisi quis, rerum consequatur minima aliquid autem, facilis nam accusantium eligendi culpa deleniti totam blanditiis ut iusto ad sint. Eum ad nobis totam odio sed. Sunt, necessitatibus. Quia cumque harum cum, laborum deleniti velit? Ipsam ducimus eveniet praesentium sapiente excepturi nulla alias, ipsum est ullam porro quia dicta sequi fugiat veniam libero itaque! Porro expedita modi placeat, delectus, voluptatem earum eos quae possimus iure maiores natus, eum unde tenetur quidem asperiores repellendus aliquid omnis nobis? Repellat provident a dolorem, facilis labore praesentium blanditiis cum quibusdam, quod aperiam itaque iste. Dolorem, omnis similique!</p>
            </div>
            <div className="flex border-t-2 pt-3 gap-3 border-green-700">
                <More amount="100K" icon={<Heart />} />
                <More amount="100K" icon={<Download />} />
                <More amount="100K" icon={<Share2 />} />
            </div>
        </div>
    </div>
  )
}

export default BlogContent