
class Event {

  constructor(extendedProps, start, end, title = '', id = 0) {
    this.title = title;
    this.id = id;
    this.start = start;
    this.end = end || new Date(start + 3600 * 1000);
    this.extendedProps = extendedProps;
  }
}

export default Event;