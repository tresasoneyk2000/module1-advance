import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginFormComponent } from './login-form.component';
import { FormsModule } from '@angular/forms';

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginFormComponent],
      imports: [FormsModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render the login form', () => {
    const formElement = fixture.nativeElement.querySelector('form');
    expect(formElement).toBeTruthy();

    const usernameInput = fixture.nativeElement.querySelector('#username');
    expect(usernameInput).toBeTruthy();

    const passwordInput = fixture.nativeElement.querySelector('#password');
    expect(passwordInput).toBeTruthy();

    const submitButton = fixture.nativeElement.querySelector('button[type="submit"]');
    expect(submitButton).toBeTruthy();
  });

  it('should validate the form inputs', () => {
    component.username = '';
    component.password = '';

    fixture.detectChanges();

    const formElement = fixture.nativeElement.querySelector('form');
    formElement.dispatchEvent(new Event('submit'));
    fixture.detectChanges();

    const errorMessages = fixture.nativeElement.querySelectorAll('.error-message');
    expect(errorMessages.length).toBe(2);
    expect(errorMessages[0].textContent).toContain('Username is required.');
    expect(errorMessages[1].textContent).toContain('Password is required.');
  });

  it('should submit the form with valid inputs', () => {
    const mockUsername = 'testuser';
    const mockPassword = 'testpassword';

    spyOn(component, 'login');

    component.username = mockUsername;
    component.password = mockPassword;

    fixture.detectChanges();

    const formElement = fixture.nativeElement.querySelector('form');
    formElement.dispatchEvent(new Event('submit'));
    fixture.detectChanges();

    expect(component.login).toHaveBeenCalled();
    expect(component.login).toHaveBeenCalledWith();
  });
});

