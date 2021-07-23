const data = {
  string: [
    {
      value1: '"5"',
      value2: 4,
      result: '5' + 4,
      mark: '+',
      type: 'implicit'
    },
    {
      value1: 'String(666)',
      value2: '',
      result: String(666),
      mark: '',
      type: 'explicit'
    }
    ,
    {
      value1: new Date(0),
      value2: 0,
      result: new Date(0) + 0,
      mark: '+',
      type: 'implicit'
    }
  ]
  ,
  boolean: [
    {
      value1: 5,
      value2: 'Hi',
      result: 5 || 'Hi',
      mark: '||',
      type: 'implicit'
    }
    ,
    {
      value1: '!!1',
      value2: '',
      result: !!1,
      mark: '',
      type: 'implicit'
    }
    ,
    {
      value1: 'Boolean(7)',
      value2: '',
      result: Boolean(2),
      mark: '',
      type: 'explicit'
    }
    ,
  ]
  ,
  numeric: [
    {
      value1: 5,
      value2: 4,
      result: 5 + 4,
      mark: '+',
      type: 'implicit'
    }
    ,
    {
      value1: 'Number("123")',
      value2: '',
      result: Number('123'),
      mark: '',
      type: 'explicit'
    }
    ,
    {
      value1: "+'555'",
      value2: "",
      result: +'555',
      mark: '',
      type: 'implicit'
    }

  ]
}
export default data;