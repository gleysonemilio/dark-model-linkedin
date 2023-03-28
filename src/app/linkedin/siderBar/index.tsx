import { ViewText } from '@/components'
import MyNetworks from '@/components/MyNetworks'

export default function SideBar() {
  return (
    <aside>
      <section>
        <div className="container-sub">
          <ViewText
            text={
              <span>
                "I decided to improve my knowledge of the latest version of Next13, better
                understanding the functioning of server and client components, as well as exploring
                new features.
                <br />
                <br />
                With this in mind, I decided to create the LinkedIn profile section from scratch,
                incorporating a dark mode theme. In the process, I also created some components with
                a more modern appearance.
                <br />
                <br />
                The ultimate goal is to turn it into a comprehensive portfolio that showcases my
                experience and allows me to tell my professional story in a unique way.
                <br />
                <br />
                Specifications: Project created from scratch using Next13, CSS, and Typescript."
              </span>
            }
          />
        </div>
      </section>
      <MyNetworks />
    </aside>
  )
}
