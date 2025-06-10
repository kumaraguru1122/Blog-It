import React from "react";
import { BlogContext } from "../contexts/BlogContext";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

const BlogDetail = () => {
  let { blogs } = useContext(BlogContext);
  const { id } = useParams();

  const blog = blogs.find((blog) => blog.id == id);

  let blogContent = `

## Fatis huc orbe iam

Lorem markdownum scripta retusa iuncturas omnia abnuit, Argum est. Volui erat
se, suos! Lauroque et aequent parvae Curetida ferro uni. Loco Eurydicen etiam
gratamque morte neptem! Ferunt leves portarum impetus actum speque trahens!

## Pertimuitque vestra acervo erit fulgure Ausoniae pabula

Duxit interrita, rates nulla sub ipse Numidasque nec, ille quoque de et
circumvolat. [Et mortis](http://iacetopposuitque.org/tandem) Pirithoi fune et,
quaeque longi. Mentis posset autem Aesonius constitit, pro adspicit mentibus, et
grandia! Talibus summaque, et quibus ut extemplo **parte capillos** piget. [Est
utque](http://adfata-iovi.org/quoque-quae.html): fumis sibi: et ipse,
Herculeamque minuat, surrexere, scilicet suffuderat aures.

## Parvos hiberna inque ac

Stetit cuius incandescit: [non](http://protinus.org/et) nec volucrisque est haec
**nota et memor** voco summa recursus vinctum flumine. Modo fabrae, et [creatam
Aram nec](http://www.dixit.net/cum-consiliique) ipse nec oblita hoc vana.

- Ibitis pavet pavore utroque non caeli potestas
- Geminata abesse meque restitit in iram sine
- Mittere apes annorum
- Ionium hostibus Troiae frondente ponitur colla totoque
- Iunxit dea origo ego species nocent in

## Sacerdos certa Eridanum potuisse quoque ideoque

Ubi absumptis arcus *pariter*, o accipienda miles: peragit mora mille causam
postes. Arce statque umeris prolemque animam, est quoque iunget.

- Una semper dubitat
- Amor tempore superest intrarunt respicere posita et
- Quid populisque tempora sparsaque Proserpina iter silvas

Posset Thyneius tenero inplicuit postquam fortunaeque holus, senectus inposita.
Simulacraque denos caedis regis, dubiam? Satis quoque?

  `;

  return (
    <div className="p-4">
      <h1 className="text-4xl mx-auto max-w-3xl mb-4  font-bold ">
        {blog.title}
      </h1>
      <div className="mx-auto max-w-3xl prose">
        <ReactMarkdown>{blogContent}</ReactMarkdown>
      </div>
    </div>
  );
};

export default BlogDetail;
