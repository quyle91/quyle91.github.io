import { useState, useEffect, useRef } from "react"

const CV_PASSWORD = "quyle91.github.io"

const CvAuth = ({ onUnlock }) => {
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [error, setError] = useState("")
    const [isShaking, setIsShaking] = useState(false)
    const inputRef = useRef(null)

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus()
        }
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!password.trim()) {
            setError("Vui lòng nhập mật khẩu!")
            triggerShake()
            return
        }

        if (password.trim() === CV_PASSWORD) {
            setError("")
            onUnlock()
        } else {
            setError("Mật khẩu không chính xác, vui lòng thử lại!")
            triggerShake()
            setPassword("")
            if (inputRef.current) {
                inputRef.current.focus()
            }
        }
    }

    const triggerShake = () => {
        setIsShaking(true)
        setTimeout(() => setIsShaking(false), 500)
    }

    return (
        <div style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#2c3e50",
            padding: "20px",
            fontFamily: "'Space Mono', monospace"
        }}>
            <style>{`
                @keyframes cvShake {
                    0%, 100% { transform: translateX(0); }
                    20%, 60% { transform: translateX(-10px); }
                    40%, 80% { transform: translateX(10px); }
                }
                .cv-shake {
                    animation: cvShake 0.4s ease-in-out;
                }
                .cv-auth-card {
                    background: #ffffff;
                    border-radius: 12px;
                    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.25);
                    max-width: 440px;
                    width: 100%;
                    padding: 40px 30px;
                    text-align: center;
                }
                .cv-input-group {
                    position: relative;
                    margin: 20px 0;
                }
                .cv-input {
                    width: 100%;
                    padding: 14px 45px 14px 16px;
                    font-size: 15px;
                    font-family: inherit;
                    border: 2px solid #e2e8f0;
                    border-radius: 8px;
                    outline: none;
                    transition: border-color 0.2s, box-shadow 0.2s;
                    box-sizing: border-box;
                }
                .cv-input:focus {
                    border-color: #3b82f6;
                    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
                }
                .cv-toggle-pwd {
                    position: absolute;
                    right: 12px;
                    top: 50%;
                    transform: translateY(-50%);
                    background: none;
                    border: none;
                    cursor: pointer;
                    color: #64748b;
                    font-size: 16px;
                    padding: 4px 8px;
                }
                .cv-btn-submit {
                    width: 100%;
                    padding: 14px;
                    font-size: 15px;
                    font-weight: 700;
                    font-family: inherit;
                    background-color: #1e293b;
                    color: #ffffff;
                    border: none;
                    border-radius: 8px;
                    cursor: pointer;
                    transition: background-color 0.2s, transform 0.1s;
                }
                .cv-btn-submit:hover {
                    background-color: #0f172a;
                }
                .cv-btn-submit:active {
                    transform: scale(0.99);
                }
                .cv-btn-home {
                    margin-top: 15px;
                    display: inline-block;
                    font-size: 13px;
                    color: #64748b;
                    text-decoration: none;
                    transition: color 0.2s;
                }
                .cv-btn-home:hover {
                    color: #1e293b;
                    text-decoration: underline;
                }
            `}</style>

            <div className={`cv-auth-card ${isShaking ? "cv-shake" : ""}`}>
                <div style={{
                    width: "64px",
                    height: "64px",
                    margin: "0 auto 16px",
                    borderRadius: "50%",
                    backgroundColor: "#f1f5f9",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#334155",
                    fontSize: "24px"
                }}>
                    <i className="fa fa-lock" />
                </div>

                <h2 style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    color: "#0f172a",
                    margin: "0 0 8px"
                }}>
                    Nội Dung Được Khóa
                </h2>

                <p style={{
                    fontSize: "13px",
                    color: "#64748b",
                    margin: "0 0 20px",
                    lineHeight: "1.5"
                }}>
                    Vui lòng nhập mật khẩu để xem nội dung CV của Lê Văn Quý
                </p>

                <form onSubmit={handleSubmit}>
                    <div className="cv-input-group">
                        <input
                            ref={inputRef}
                            type={showPassword ? "text" : "password"}
                            className="cv-input"
                            placeholder="Nhập mật khẩu..."
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value)
                                if (error) setError("")
                            }}
                        />
                        <button
                            type="button"
                            className="cv-toggle-pwd"
                            onClick={() => setShowPassword(!showPassword)}
                            title={showPassword ? "Ẩn mật khẩu" : "Hiện mật khẩu"}
                        >
                            <i className={`fa fa-${showPassword ? "eye-slash" : "eye"}`} />
                        </button>
                    </div>

                    {error && (
                        <div style={{
                            color: "#ef4444",
                            fontSize: "13px",
                            marginBottom: "16px",
                            fontWeight: "500"
                        }}>
                            <i className="fa fa-exclamation-circle" style={{ marginRight: "6px" }} />
                            {error}
                        </div>
                    )}

                    <button type="submit" className="cv-btn-submit">
                        <i className="fa fa-unlock-alt" style={{ marginRight: "8px" }} />
                        Mở Khóa
                    </button>
                </form>

                <a href="#/" className="cv-btn-home">
                    <i className="fa fa-arrow-left" style={{ marginRight: "6px" }} />
                    Quay về Trang chủ
                </a>
            </div>
        </div>
    )
}

export default CvAuth
