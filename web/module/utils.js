
const data = {}

const template = {
  render(container, template_name, data={}){
    $(container).html(Mustache.render(this[template_name], data))
  },
  append(container, template_name, data={}){
    $(container).append(Mustache.render(this[template_name], data))
  }
}

function log(value){
  console.log(JSON.parse(JSON.stringify(value)))
}

function date_time_readable(timestamp){
  datetime = new Date(timestamp * 1000).toLocaleDateString( 'fr', {
    year: 'numeric', 
    month: 'numeric', 
    day: 'numeric'
  })
  duration = Timer.timestamp_to_time_ago(timestamp)
  return datetime + ' (il y a ' + duration + ')'
}

function get_time_ago(timestamp){
  return 'il y a ' + Timer.timestamp_to_time_ago(timestamp)
}

function is_mobile_device() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};

