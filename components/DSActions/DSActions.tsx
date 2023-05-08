import { useState } from 'react'
import DSAction from './DSAction'
import { DSActionArrayPropTypes } from '@/_types/DSActionPropTypes'

//// PROPTYPES
type DSActionsPropTypes = {
  actions: DSActionArrayPropTypes[]
}

const DSActions = ({ actions }: DSActionsPropTypes) => {
  const [selectedAction, setSelectedAction] = useState<string | null>(null)

  const handleActionSelect = (action: string) => {
    setSelectedAction(action)
  }

  return (
    <section className='ds-actions-wrapper flex flex-row flex-wrap w-full'>
      {actions.map((action, i) => (
        <DSAction
          key={`${i}-${action.title.length}`}
          title={action.title}
          input1Type={action.input1Type}
          input2Type={action.input2Type}
          icon={action.icon}
          selected={action.title === selectedAction}
          onSelect={() => handleActionSelect(action.title)}
          action={action.action}
        />
      ))}
    </section>
  )
}

export default DSActions
