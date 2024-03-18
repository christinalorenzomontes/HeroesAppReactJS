import { fireEvent, render, screen } from "@testing-library/react";
import { AuthContext } from "../../../src/auth";
import { MemoryRouter, useNavigate } from "react-router-dom";
import { Navbar } from "../../../src/ui";

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate
}));

describe('Pruevas en <Navbar />', () => {

  const contextValue = {
    logged: true,
    user: {
      name: 'Laura'
    },
    logout: jest.fn()
  }

  beforeEach(() => jest.clearAllMocks() );

  test('Debe mostrar el nombre del usuario logado', () => {

    render(
      <AuthContext.Provider value={ contextValue }>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect( screen.getByText('Laura') ).toBeTruthy();

  });

  test('Debe llamar al logout y navigate cuando se hace click en el botón', () => {

    render(
      <AuthContext.Provider value={ contextValue }>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    const logoutBtn = screen.getByRole('button');
    fireEvent.click( logoutBtn );

    expect( contextValue.logout ).toHaveBeenCalled();
    expect( mockedUseNavigate ).toHaveBeenCalledWith('/login', {'replace': true});

  });

});
