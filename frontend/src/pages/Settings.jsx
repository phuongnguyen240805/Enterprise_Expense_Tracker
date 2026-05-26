import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Save } from 'lucide-react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

export default function Settings() {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);

  const handleSave = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success('Cập nhật hồ sơ thành công');
    }, 800);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      className="pb-20 max-w-3xl mx-auto"
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
        <div>
          <h1 className="text-4xl font-black text-foreground tracking-tight mb-2">Cài đặt Hồ sơ</h1>
          <p className="text-muted text-lg font-medium">Quản lý và cập nhật thông tin cá nhân của bạn.</p>
        </div>
        <button 
          onClick={handleSave}
          disabled={loading}
          className="btn-primary flex items-center gap-3 px-8 shadow-primary/20 shadow-lg active:scale-95"
        >
          {loading ? (
            <div className="w-5 h-5 border-2 border-primary-foreground/20 border-t-primary-foreground rounded-full animate-spin" />
          ) : (
            <Save className="w-5 h-5" />
          )}
          {loading ? 'Đang lưu...' : 'Lưu thay đổi'}
        </button>
      </div>

      <div className="glass-card p-8 md:p-10">
        <h3 className="text-2xl font-bold text-foreground mb-8">Thông tin cá nhân</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-3">
            <label className="text-xs font-black text-muted uppercase tracking-widest px-1">Họ và Tên</label>
            <input 
              type="text" 
              defaultValue={user?.name || 'User'} 
              className="w-full bg-secondary border border-border rounded-xl px-5 h-14 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all font-medium" 
              placeholder="Nhập tên của bạn"
            />
          </div>
          <div className="space-y-3">
            <label className="text-xs font-black text-muted uppercase tracking-widest px-1">Địa chỉ Email</label>
            <input 
              type="email" 
              defaultValue={user?.email || 'user@example.com'} 
              className="w-full bg-secondary/50 border border-border rounded-xl px-5 h-14 text-muted cursor-not-allowed font-medium" 
              disabled
            />
          </div>
          <div className="md:col-span-2 space-y-3">
            <label className="text-xs font-black text-muted uppercase tracking-widest px-1">Tiền tệ mặc định</label>
            <select className="w-full bg-secondary border border-border rounded-xl px-5 h-14 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all font-medium appearance-none">
              <option value="VND">VND - Đồng Việt Nam (đ)</option>
              <option value="USD">USD - Đô la Mỹ ($)</option>
              <option value="EUR">EUR - Euro (€)</option>
            </select>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
