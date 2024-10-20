import { useRef } from "react";
import useOnScreen from "./useOnScreen";

function OnScreen() {
  const headerTwoRef = useRef();
  const visible = useOnScreen(headerTwoRef, "-70px");

  return (
    <div>
      <h1>Header</h1>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem blanditiis
        quaerat non vitae nemo eum magni nam inventore delectus veritatis,
        consectetur sed id ratione deserunt tempora consequatur expedita
        voluptate incidunt voluptatem. Recusandae quo voluptatum nesciunt ex,
        possimus et aliquid atque neque consequatur beatae nam consectetur odit
        commodi voluptatem esse corporis pariatur rem laboriosam, enim unde
        rerum quidem ducimus optio nihil. Et, sit non maxime dicta porro ratione
        possimus inventore tempora velit molestiae exercitationem impedit! Rerum
        laboriosam perspiciatis fugit, sapiente assumenda suscipit debitis
        voluptatum, commodi natus officia saepe reprehenderit mollitia sint
        temporibus exercitationem ratione nobis facilis repellendus reiciendis
        dolorum. Dignissimos quam facere nulla iusto minima distinctio beatae
        quibusdam dolore esse. Voluptatum blanditiis magni rem, nobis modi
        accusantium ipsam vel qui facilis ullam aliquid iure distinctio eaque
        ipsum quidem inventore totam sit, incidunt sapiente quis mollitia nam!
        Nemo nam sapiente accusantium sint cum sed asperiores amet dicta sit et
        animi quibusdam at, fugit numquam facere nesciunt quasi minima odit
        laboriosam in? Dolorum fuga voluptatum nemo harum eius iusto autem
        voluptate, quod odio ratione obcaecati et doloremque consequatur facere
        eligendi! Adipisci explicabo eum placeat dignissimos reprehenderit
        eligendi molestiae vitae temporibus cupiditate animi, asperiores quae
        vero. Enim cumque aliquid quam repellat cupiditate officia obcaecati.
      </div>
      <h1 ref={headerTwoRef}>Header two {visible && "(visible)"}</h1>
      <div>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, labore
        illum! Animi eligendi sequi ducimus quos illo tempore laboriosam aut
        placeat. Impedit, repellat? Voluptatem ullam explicabo ipsum dolor, quos
        eveniet atque hic! Cumque aspernatur expedita ratione! Quis odio ipsa
        necessitatibus, at deleniti commodi cumque quo quaerat corporis in,
        soluta hic tenetur similique sunt asperiores reiciendis et laborum! At
        ipsa quaerat recusandae doloribus laboriosam porro vero impedit, facere
        ipsum quo, ex nemo excepturi architecto non alias a sed? Voluptates
        inventore sed iure ratione laborum in porro amet minima, velit numquam
        tempora rem excepturi maiores non veritatis omnis, error repellendus.
        Eius, dolorum.
      </div>
    </div>
  );
}

export default OnScreen;
