D:.
│   .gitignore
│   docker-compose.yml
│   README.md
│   
├───.idea
│   │   .gitignore
│   │   Enterprise-Expense-Tracker.iml
│   │   misc.xml
│   │   modules.xml
│   │   vcs.xml
│   │   workspace.xml
│   │   
│   └───inspectionProfiles
│           Project_Default.xml
│           
├───backend
│   │   Dockerfile
│   │   mvnw
│   │   mvnw.cmd
│   │   pom.xml
│   │   
│   ├───.mvn
│   │   │   jvm.config
│   │   │   
│   │   └───wrapper
│   │           maven-wrapper.jar
│   │           maven-wrapper.properties
│   │           
│   ├───src
│   │   ├───main
│   │   │   ├───java
│   │   │   │   └───com
│   │   │   │       └───expensetracker
│   │   │   │           │   ExpenseTrackerApplication.java
│   │   │   │           │   
│   │   │   │           ├───config
│   │   │   │           │       DataInitializer.java
│   │   │   │           │       OpenApiConfig.java
│   │   │   │           │       SecurityConfig.java
│   │   │   │           │       
│   │   │   │           ├───controller
│   │   │   │           │       AuthController.java
│   │   │   │           │       BudgetController.java
│   │   │   │           │       CategoryController.java
│   │   │   │           │       ReportController.java
│   │   │   │           │       TransactionController.java
│   │   │   │           │       
│   │   │   │           ├───dto
│   │   │   │           │   ├───request
│   │   │   │           │   │       BudgetRequest.java
│   │   │   │           │   │       LoginRequest.java
│   │   │   │           │   │       RegisterRequest.java
│   │   │   │           │   │       TokenRefreshRequest.java
│   │   │   │           │   │       TransactionRequest.java
│   │   │   │           │   │       
│   │   │   │           │   └───response
│   │   │   │           │           BudgetResponse.java
│   │   │   │           │           JwtResponse.java
│   │   │   │           │           TransactionResponse.java
│   │   │   │           │           UserResponse.java
│   │   │   │           │           
│   │   │   │           ├───entity
│   │   │   │           │       Budget.java
│   │   │   │           │       Category.java
│   │   │   │           │       RefreshToken.java
│   │   │   │           │       Role.java
│   │   │   │           │       Transaction.java
│   │   │   │           │       TransactionType.java
│   │   │   │           │       User.java
│   │   │   │           │       
│   │   │   │           ├───exception
│   │   │   │           │       DuplicateBudgetException.java
│   │   │   │           │       ErrorResponse.java
│   │   │   │           │       GlobalExceptionHandler.java
│   │   │   │           │       ResourceNotFoundException.java
│   │   │   │           │       
│   │   │   │           ├───mapper
│   │   │   │           │       BudgetMapper.java
│   │   │   │           │       TransactionMapper.java
│   │   │   │           │       UserMapper.java
│   │   │   │           │       
│   │   │   │           ├───repository
│   │   │   │           │       BudgetRepository.java
│   │   │   │           │       CategoryRepository.java
│   │   │   │           │       RefreshTokenRepository.java
│   │   │   │           │       TransactionRepository.java
│   │   │   │           │       UserRepository.java
│   │   │   │           │       
│   │   │   │           ├───scheduler
│   │   │   │           │       BudgetAlertScheduler.java
│   │   │   │           │       
│   │   │   │           ├───security
│   │   │   │           │       AuthTokenFilter.java
│   │   │   │           │       JwtUtils.java
│   │   │   │           │       UserDetailsServiceImpl.java
│   │   │   │           │       
│   │   │   │           └───service
│   │   │   │               │   AuthService.java
│   │   │   │               │   BudgetService.java
│   │   │   │               │   CategoryService.java
│   │   │   │               │   EmailService.java
│   │   │   │               │   RefreshTokenService.java
│   │   │   │               │   ReportService.java
│   │   │   │               │   TransactionService.java
│   │   │   │               │   
│   │   │   │               └───impl
│   │   │   │                       AuthServiceImpl.java
│   │   │   │                       BudgetServiceImpl.java
│   │   │   │                       CategoryServiceImpl.java
│   │   │   │                       EmailServiceImpl.java
│   │   │   │                       RefreshTokenServiceImpl.java
│   │   │   │                       ReportServiceImpl.java
│   │   │   │                       TransactionServiceImpl.java
│   │   │   │                       
│   │   │   └───resources
│   │   │           application-dev.yml
│   │   │           application.yml
│   │   │           
│   │   └───test
│   │       └───java
│   │           └───com
│   │               └───expensetracker
│   │                   └───service
│   │                           AuthServiceTest.java
│   │                           TransactionServiceTest.java
│   │                           
│   └───target
│       │   expense-tracker-1.0.0.jar
│       │   expense-tracker-1.0.0.jar.original
│       │   
│       ├───classes
│       │   │   application-dev.yml
│       │   │   application.yml
│       │   │   
│       │   └───com
│       │       └───expensetracker
│       │           │   ExpenseTrackerApplication.class
│       │           │   
│       │           ├───config
│       │           │       DataInitializer.class
│       │           │       OpenApiConfig.class
│       │           │       SecurityConfig.class
│       │           │       
│       │           ├───controller
│       │           │       AuthController.class
│       │           │       BudgetController.class
│       │           │       CategoryController.class
│       │           │       ReportController.class
│       │           │       TransactionController.class
│       │           │       
│       │           ├───dto
│       │           │   ├───request
│       │           │   │       BudgetRequest.class
│       │           │   │       LoginRequest.class
│       │           │   │       RegisterRequest.class
│       │           │   │       TokenRefreshRequest.class
│       │           │   │       TransactionRequest.class
│       │           │   │       
│       │           │   └───response
│       │           │           BudgetResponse.class
│       │           │           JwtResponse.class
│       │           │           TransactionResponse.class
│       │           │           UserResponse$UserResponseBuilder.class
│       │           │           UserResponse.class
│       │           │           
│       │           ├───entity
│       │           │       Budget$BudgetBuilder.class
│       │           │       Budget.class
│       │           │       Category$CategoryBuilder.class
│       │           │       Category.class
│       │           │       RefreshToken$RefreshTokenBuilder.class
│       │           │       RefreshToken.class
│       │           │       Role.class
│       │           │       Transaction$TransactionBuilder.class
│       │           │       Transaction.class
│       │           │       TransactionType.class
│       │           │       User$UserBuilder.class
│       │           │       User.class
│       │           │       
│       │           ├───exception
│       │           │       DuplicateBudgetException.class
│       │           │       ErrorResponse$ErrorResponseBuilder.class
│       │           │       ErrorResponse.class
│       │           │       GlobalExceptionHandler.class
│       │           │       ResourceNotFoundException.class
│       │           │       
│       │           ├───mapper
│       │           │       BudgetMapper.class
│       │           │       TransactionMapper.class
│       │           │       UserMapper.class
│       │           │       
│       │           ├───repository
│       │           │       BudgetRepository.class
│       │           │       CategoryRepository.class
│       │           │       RefreshTokenRepository.class
│       │           │       TransactionRepository.class
│       │           │       UserRepository.class
│       │           │       
│       │           ├───scheduler
│       │           │       BudgetAlertScheduler.class
│       │           │       
│       │           ├───security
│       │           │       AuthTokenFilter.class
│       │           │       JwtUtils.class
│       │           │       UserDetailsServiceImpl.class
│       │           │       
│       │           └───service
│       │               │   AuthService.class
│       │               │   BudgetService.class
│       │               │   CategoryService.class
│       │               │   EmailService.class
│       │               │   RefreshTokenService.class
│       │               │   ReportService.class
│       │               │   TransactionService.class
│       │               │   
│       │               └───impl
│       │                       AuthServiceImpl.class
│       │                       BudgetServiceImpl.class
│       │                       CategoryServiceImpl.class
│       │                       EmailServiceImpl.class
│       │                       RefreshTokenServiceImpl.class
│       │                       ReportServiceImpl.class
│       │                       TransactionServiceImpl.class
│       │                       
│       ├───generated-sources
│       │   └───annotations
│       ├───generated-test-sources
│       │   └───test-annotations
│       ├───maven-archiver
│       │       pom.properties
│       │       
│       ├───maven-status
│       │   └───maven-compiler-plugin
│       │       ├───compile
│       │       │   └───default-compile
│       │       │           createdFiles.lst
│       │       │           inputFiles.lst
│       │       │           
│       │       └───testCompile
│       │           └───default-testCompile
│       │                   createdFiles.lst
│       │                   inputFiles.lst
│       │                   
│       └───test-classes
│           └───com
│               └───expensetracker
│                   └───service
│                           AuthServiceTest.class
│                           TransactionServiceTest.class
│                           
└───frontend
    │   .gitignore
    │   Dockerfile
    │   eslint.config.js
    │   index.html
    │   package-lock.json
    │   package.json
    │   README.md
    │   vite.config.js
    │   
    ├───public
    │       favicon.svg
    │       icons.svg
    │       
    └───src
        │   App.css
        │   App.jsx
        │   index.css
        │   main.jsx
        │   
        ├───assets
        │       hero.png
        │       react.svg
        │       vite.svg
        │       
        ├───components
        │       BudgetModal.jsx
        │       Layout.jsx
        │       Sidebar.jsx
        │       TransactionModal.jsx
        │       
        ├───context
        │       AuthContext.jsx
        │       ThemeContext.jsx
        │       
        ├───pages
        │       Budgets.jsx
        │       Dashboard.jsx
        │       Login.jsx
        │       Register.jsx
        │       Settings.jsx
        │       Transactions.jsx
        │       
        └───services
                api.js