import { TitleIconView } from '@/components/TitleIconView'
import './styles.css'
import { FeedLow } from '@/components/FeedLow'

export default function Activities() {
  return (
    <section>
      <div className="container-sub">
        <TitleIconView
          title="Activities"
          subTitle={'706 followers'}
          titleButton="start publication"
        />

        <div className="container-items-text m-bottom">
          <h3>You haven't posted lately</h3>
          <span>Recent posts you share or comment on will appear here</span>
        </div>
      </div>

      <FeedLow text="Show all activities" />
    </section>
  )
}
