package com.expensetracker.service.impl;

import com.expensetracker.entity.RefreshToken;
import com.expensetracker.entity.User;                
import com.expensetracker.repository.RefreshTokenRepository;
import com.expensetracker.repository.UserRepository;
import com.expensetracker.service.RefreshTokenService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.util.Optional;
import java.util.UUID;

@Service
@Transactional
public class RefreshTokenServiceImpl implements RefreshTokenService {

    @Value("${app.jwt.refresh-expiration}")
    private Long refreshTokenDurationMs;

    private final RefreshTokenRepository refreshTokenRepository;
    private final UserRepository userRepository;

    // Constructor Injection (tốt hơn @Autowired field)
    public RefreshTokenServiceImpl(RefreshTokenRepository refreshTokenRepository,
                                   UserRepository userRepository) {
        this.refreshTokenRepository = refreshTokenRepository;
        this.userRepository = userRepository;
    }

    @Override
    @Transactional
    public RefreshToken createRefreshToken(Long userId) {
        // XÓA token cũ trước khi tạo mới
        refreshTokenRepository.deleteByUser_Id(userId);
        refreshTokenRepository.flush(); 
      
        // Tạo token mới
        RefreshToken refreshToken = new RefreshToken();
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found with id: " + userId));

        refreshToken.setUser(user);
        refreshToken.setToken(UUID.randomUUID().toString());
        refreshToken.setExpiryDate(Instant.now().plusMillis(refreshTokenDurationMs));

        return refreshTokenRepository.save(refreshToken);
    }

    @Override
    public Optional<RefreshToken> findByToken(String token) {
        return refreshTokenRepository.findByToken(token);
    }

    @Override
    public RefreshToken verifyExpiration(RefreshToken token) {
        if (token.getExpiryDate().compareTo(Instant.now()) < 0) {
            refreshTokenRepository.delete(token);
            throw new RuntimeException("Refresh token was expired. Please make a new login request");
        }
        return token;
    }

    @Override
    public int deleteByUserId(Long userId) {
        return refreshTokenRepository.deleteByUser_Id(userId);
    }
}