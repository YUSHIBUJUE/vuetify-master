/* eslint-disable camelcase */

export function gtagClick (
  event_category: string,
  event_label: string,
  value: string
) {
  const { event } = useGtag()

  event('click', { event_category, event_label, value })
}
