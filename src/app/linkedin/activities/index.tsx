import { TitleIconView, FeedLow } from '@/components'
import { titles } from '@/core/resources'
import './styles.css'

export default function Activities() {
  return (
    <section>
      <div className="container-sub">
        <TitleIconView
          title={titles.activities}
          subTitle={'706 followers'}
          titleButton="start publication"
        />

        <div className="container-items-text m-bottom">
          <h3>You haven&apos;t posted lately</h3>
          <span>Recent posts you share or comment on will appear here</span>
        </div>
      </div>

      <FeedLow text="Show all activities" />
    </section>
  )
}
