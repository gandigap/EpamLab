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
    },
    {
      value1: 'new Date(0)',
      value2: 0,
      result: new Date(0) + 0,
      mark: '+',
      type: 'implicit'
    },
    {
      value1: '3 + 1',
      value2: '"text"',
      result: 3 + 1 + 'text',
      mark: '+',
      type: 'implicit'
    }

  ]
  ,
  boolean: [
    {
      value1: '"false"',
      value2: 'false',
      result: false == 'false',
      mark: '==',
      type: 'implicit'
    },
    {
      value1: '!!1',
      value2: '',
      result: !!1,
      mark: '',
      type: 'implicit'
    },
    {
      value1: 'Boolean(7)',
      value2: '',
      result: Boolean(7),
      mark: '',
      type: 'explicit'
    },
    {
      value1: '[1]',
      value2: 'null',
      result: [1] > null,
      mark: '>',
      type: 'explicit'
    },
  ]
  ,
  numeric: [
    {
      value1: 5,
      value2: 4,
      result: 5 + 4,
      mark: '+',
      type: 'implicit'
    },
    {
      value1: 'Number("123")',
      value2: '',
      result: Number('123'),
      mark: '',
      type: 'explicit'
    },
    {
      value1: '+"555"',
      value2: "",
      result: +'555',
      mark: '',
      type: 'implicit'
    },
    {
      value1: 'false',
      value2: 'true',
      result: false - true,
      mark: '-',
      type: 'implicit'
    }

  ]
}
export default data;