import React from 'react';
import './styles/App.scss';
import cn from 'classnames';

import { Header } from './components/Header';
import { HamburgerMenu } from './components/Header/hamburger';

import { useAppSelector, useAppDispatch } from './app/hooks';
import * as menuActions from './app/featcher/menu';

function App() {
  const dispatch = useAppDispatch();

  const { isMenuOpen } = useAppSelector((state) => state.menu);

  return (
    <div className={'App'}>
      <div
        className={cn('overlay', { opened: isMenuOpen })}
        onClick={() => {
          dispatch(menuActions.toggleMenu(false));
        }}
      />
      <Header />
      <HamburgerMenu />

      <div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae
        perferendis deleniti possimus necessitatibus magnam illo mollitia
        aperiam laborum nam! Aliquam architecto nobis veniam numquam
        necessitatibus totam nulla quaerat illo eius. Eius atque facilis beatae
        earum quae voluptates doloremque adipisci perferendis voluptatibus
        voluptas expedita necessitatibus ea ipsa consectetur qui, unde velit
        dolor veritatis modi assumenda error nostrum eos. Animi atque
        reprehenderit cum provident neque ad doloremque aliquam nemo molestias
        adipisci quibusdam officia at ut dignissimos blanditiis libero sed nihil
        deserunt illo, quo itaque placeat nostrum ratione incidunt! Commodi
        voluptas ipsa molestias quidem at fuga dolorem ducimus. Repudiandae
        necessitatibus laborum delectus hic corrupti. Alias illum praesentium
        vel enim, harum dolores at quos, asperiores magni esse ex accusantium in
        officiis laudantium? Ducimus commodi, odit necessitatibus enim optio
        debitis ipsam amet nemo reprehenderit, repellat facilis neque, officia
        beatae minima voluptate. Sint sunt atque dolores, voluptas perspiciatis
        ipsum ut repellendus ipsa cum odio iusto inventore eveniet veritatis
        esse, eum facere? Porro delectus animi, libero at quae odit numquam
        quidem beatae architecto! Quibusdam optio ad adipisci, quam voluptas
        excepturi laboriosam perspiciatis accusantium eos numquam consectetur
        saepe. Accusantium, impedit deleniti consectetur voluptatum aut dolorum
        molestiae veniam culpa unde amet molestias reiciendis delectus harum
        perferendis? Fugiat, voluptatum odio inventore quos repellendus error
        culpa eveniet voluptatem mollitia voluptas nihil nobis temporibus
        deleniti recusandae in modi excepturi nam expedita laboriosam, possimus
        debitis! Provident odit dicta sequi ratione labore quos sapiente? A
        quidem, excepturi laboriosam officia optio adipisci architecto harum
        porro dolores modi ducimus! Beatae quibusdam aperiam saepe, quas
        repellendus libero atque perferendis. Enim nobis ab deserunt illo minus
        excepturi iusto dolor, exercitationem qui rerum laboriosam ipsa fugiat
        in officia deleniti dolorem dolore odit ut voluptatibus, possimus itaque
        est. Reiciendis pariatur iste doloremque suscipit fuga provident odit a
        architecto beatae ab quas illum cum, porro quaerat laboriosam nulla ex
        atque ratione blanditiis? Repellat sint reprehenderit doloremque,
        voluptas, earum, possimus quam hic illo est numquam ipsa incidunt esse
        nostrum! Magnam officia officiis numquam voluptates mollitia
        dignissimos, nisi a beatae molestias pariatur tempore laboriosam
        consequuntur possimus! Odit, optio incidunt omnis, minima cumque
        consequatur possimus, numquam sed cupiditate est quos quas? Deserunt,
        deleniti itaque beatae voluptates ad esse eligendi. Accusantium quis
        temporibus ratione suscipit ipsum assumenda iure perspiciatis commodi
        nesciunt deserunt reiciendis dolore repellat eum, rem amet quasi,
        perferendis non quaerat vitae vero adipisci sint deleniti hic. Repellat
        et, sed quod alias quos facilis magnam, at doloremque delectus itaque
        molestias hic nobis explicabo fugit beatae! Molestiae provident corrupti
        voluptatem inventore, quidem, reprehenderit eum quaerat expedita quod
        facere a. Expedita vitae ullam maiores numquam perspiciatis vero officia
        vel, animi hic adipisci iusto, provident enim, alias et nemo sint. Amet
        cum quia repellat dolorem inventore, pariatur facilis laborum voluptatem
        eos. Non asperiores explicabo fugiat nam doloribus tempora dignissimos
        rem ipsum. At dolorum aut sint nulla, explicabo consequatur distinctio
        nisi fuga facilis est in molestias a quod! Ad ea a perspiciatis nam
        tempore, at quia dolore obcaecati! Incidunt unde corrupti natus quasi
        nam necessitatibus culpa similique porro doloremque in saepe, quo
        placeat assumenda tenetur commodi possimus, reiciendis vitae sed,
        blanditiis dolor. Illo, perferendis quaerat ab alias molestias, qui
        dignissimos, ad tempora ratione voluptatem non maiores totam beatae! Eum
        obcaecati dolorum quam, natus quas qui magni sit architecto distinctio
        tempora eaque nostrum laudantium hic eos quibusdam totam tempore tenetur
        ipsa, perferendis magnam doloremque. Blanditiis quisquam obcaecati
        incidunt saepe labore officia magni accusamus similique est. Ullam,
        beatae! Dolore voluptatibus pariatur earum quae in fuga sunt commodi
        harum a atque! Ullam quibusdam exercitationem voluptatibus molestias a
        dicta commodi quod esse perspiciatis omnis facere eaque assumenda
        deleniti, maxime nesciunt ipsam adipisci tenetur odio tempore!
        Architecto, placeat veniam ipsum sunt praesentium cumque. Ea adipisci
        sint voluptate accusantium id recusandae sed temporibus maiores libero,
        enim ducimus aspernatur laboriosam animi. Repudiandae at laudantium
        neque corrupti aliquam doloribus nostrum voluptatibus omnis dolorem!
        Alias accusantium enim fugiat sed maxime aspernatur temporibus nostrum
        rem sequi asperiores repellat labore illum adipisci quas corrupti
        mollitia optio tempore magni aperiam nulla dolorum, quos impedit vero?
        Sed et iusto architecto quaerat nam at consequatur magni voluptas iste
        asperiores fuga fugit numquam soluta suscipit atque, libero qui porro
        amet, delectus veritatis maxime earum sapiente. Dicta unde cupiditate
        ducimus veniam obcaecati iusto, dolor velit perspiciatis, quis rerum,
        magnam exercitationem nulla. Quidem quam dignissimos facere, maiores
        asperiores commodi laborum libero tempora voluptatum sed? Porro magni
        nemo voluptatibus est in praesentium libero iusto! Reiciendis quam
        maiores architecto, omnis consectetur, quae quaerat libero perspiciatis
        aut distinctio nesciunt molestias dicta corporis iusto assumenda natus
        incidunt veritatis veniam, accusamus nam. Ad, eligendi molestias alias
        aperiam facilis vel rem excepturi architecto soluta iusto suscipit quos
        perspiciatis velit nam in nihil sit dolorum repellendus vitae delectus
        praesentium odit animi amet quia. Deleniti quaerat nulla dolores iure
        inventore, illo totam beatae incidunt nostrum id rerum dignissimos,
        voluptatibus alias? Exercitationem ipsa id dolores odit ipsum nihil
        pariatur aspernatur nostrum sunt numquam beatae impedit, porro error
        quas quis vero, animi culpa inventore deserunt libero, ipsam deleniti
        perspiciatis alias. Est, veniam voluptates molestias perferendis placeat
        quasi quaerat earum laudantium recusandae sunt quidem tempore aliquam
        error facere sequi eveniet harum id totam vitae impedit illum possimus
        corrupti eum! Quasi facere officia necessitatibus accusantium dolor
        voluptas, qui quo, laboriosam similique aut soluta? Unde soluta porro
        fugit illum aut corporis, molestias iure. Quas tenetur optio, debitis
        esse iure ut? Blanditiis doloremque iure distinctio consequatur tempore
        necessitatibus? Quasi numquam impedit voluptas aut perferendis hic,
        possimus sint! Aliquid ducimus fuga neque magni voluptatem ea iusto
        consequatur. Facilis odit itaque tempore ipsam non, doloribus quis dicta
        aliquam, nobis fuga hic. Enim omnis aliquid, fugiat laboriosam numquam
        magni voluptatibus quisquam explicabo voluptate? Minima asperiores ab
        officiis. Quam modi vel quisquam eveniet accusantium tempora vitae
        harum. Necessitatibus dolorum eum veniam repellendus natus eos alias,
        commodi soluta consequatur cum fugit sapiente corrupti est deserunt
        quisquam, laudantium dolorem inventore neque rem quos libero expedita
        quae! Doloremque eos, dolorem maxime harum id quas, aspernatur neque
        natus earum quaerat ullam tenetur dolore aliquid modi hic. Saepe,
        officiis consectetur nemo maiores incidunt iste unde pariatur quo
        officia aut iusto id obcaecati maxime blanditiis doloremque atque a
        sequi.
      </div>
    </div>
  );
}

export default App;
