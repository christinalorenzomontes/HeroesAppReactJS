import { authReducer, types } from "../../../src/auth";

describe('Pruebas en el authReducer', () => { 

  test('Debe devolver el estado por defecto', () => { 

    const state = authReducer({ logged: false}, {});
    expect( state ).toEqual({ logged: false });

  })

  test('El login debe llamar al login autenticar y establecer el user', () => { 

    const action = {
      type: types.login,
      payload: {
        name: 'Christina',
        id: '123'
      }
    }

    const state = authReducer({ logged: false }, action );
    expect( state ).toEqual({
      logged: true,
      user: action.payload
    })

  })

  test('Debe devolver el estado por defecto', () => { 

    const state = {
      logged: true,
      user: { id: '123', name: 'Chris' }
    }

    const action = {
      type: types.logout
    }

    const newState = authReducer( state, action );

    expect( newState ).toEqual({ logged: false });

  })

})