// package com.expensetracker.service;

// import com.expensetracker.entity.RefreshToken;
// import java.util.Optional;

// public interface RefreshTokenService {
//     Optional<RefreshToken> findByToken(String token);
//     RefreshToken createRefreshToken(Long userId);
//     RefreshToken verifyExpiration(RefreshToken token);
//     int deleteByUserId(Long userId);
// }


package com.expensetracker.service;

import com.expensetracker.entity.RefreshToken;
import java.util.Optional;

public interface RefreshTokenService {
    
    RefreshToken createRefreshToken(Long userId);
    
    Optional<RefreshToken> findByToken(String token);
    
    RefreshToken verifyExpiration(RefreshToken token);
    
    int deleteByUserId(Long userId);
}