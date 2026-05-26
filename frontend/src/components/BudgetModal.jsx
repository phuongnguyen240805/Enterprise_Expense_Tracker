import { useState } from 'react';
import { X, Target, Calendar, Tag, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { categoryService } from '../services/api';
import toast from 'react-hot-toast';

export default function BudgetModal({ isOpen, onClose, onSave, categories }) {
  const [formData, setFormData] = useState({
    limitAmount: '',
    categoryId: '',
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear()
  });

  const [isAddingCategory, setIsAddingCategory] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState('');

  if (!isOpen) return null;

  const handleAddCategory = async () => {
    if (!newCategoryName.trim()) return;
    try {
      const { data } = await categoryService.create({ 
        name: newCategoryName,
        type: 'EXPENSE'
      });
      toast.success('Đã thêm danh mục');
      if (onCategoryCreated) onCategoryCreated();
      setFormData({ ...formData, categoryId: data.id });
      setIsAddingCategory(false);
      setNewCategoryName('');
    } catch (err) {
      const message = err.response?.data?.message || err.message || 'Kiểm tra kết nối';
      toast.error(`Lỗi: ${message}`);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      ...formData,
      limitAmount: parseFloat(formData.limitAmount),
      categoryId: parseInt(formData.categoryId), // Cast to Number
      month: parseInt(formData.month),
      year: parseInt(formData.year)
    });
  };

  const months = [
    "Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6",
    "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#020617]/80 backdrop-blur-md"
        />

        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-lg glass rounded-[40px] shadow-2xl p-8 border border-border"
        >
          <div className="flex justify-between items-center mb-10">
            <div>
              <h2 className="text-3xl font-black text-foreground tracking-tighter">Lập Ngân sách</h2>
              <p className="text-muted text-sm mt-1 uppercase tracking-widest font-bold">Lên kế hoạch giới hạn chi tiêu</p>
            </div>
            <button 
              onClick={onClose}
              className="p-3 hover:bg-secondary rounded-2xl text-muted hover:text-foreground transition-all"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-6">
              <div className="relative group">
                <span className="absolute left-6 top-1/2 -translate-y-1/2 text-3xl font-black text-muted group-focus-within:text-primary group-hover:text-foreground">đ</span>
                <input 
                  type="number" 
                  required
                  placeholder="Giới hạn hàng tháng"
                  value={formData.limitAmount}
                  onChange={(e) => setFormData({...formData, limitAmount: e.target.value})}
                  className="w-full bg-card border border-border rounded-3xl py-6 pl-14 pr-8 text-4xl font-black text-foreground outline-none focus:border-primary/50 transition-all placeholder:text-muted/50"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center px-2">
                  <label className="text-[10px] font-black text-muted uppercase tracking-[0.2em] flex items-center gap-2">
                    <Tag className="w-3 h-3" /> Danh mục
                  </label>
                  <button 
                    type="button"
                    onClick={() => setIsAddingCategory(!isAddingCategory)}
                    className="text-[10px] font-bold text-primary hover:text-primary/80 uppercase tracking-widest"
                  >
                    {isAddingCategory ? 'Hủy' : '+ Thêm mới'}
                  </button>
                </div>
                
                <AnimatePresence mode="wait">
                  {isAddingCategory ? (
                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="flex gap-2"
                    >
                      <input 
                        type="text"
                        autoFocus
                        placeholder="Danh mục mới..."
                        value={newCategoryName}
                        onChange={(e) => setNewCategoryName(e.target.value)}
                        className="auth-input flex-1 h-14 bg-card border border-border rounded-xl px-4 text-foreground focus:outline-none focus:border-primary"
                      />
                      <button 
                        type="button"
                        onClick={handleAddCategory}
                        className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center text-primary-foreground hover:bg-primary/90 transition-all"
                      >
                        <Check className="w-6 h-6" />
                      </button>
                    </motion.div>
                  ) : (
                    <motion.select 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      required
                      value={formData.categoryId}
                      onChange={(e) => setFormData({...formData, categoryId: e.target.value})}
                      className="auth-input h-14 w-full bg-card border border-border rounded-xl px-4 text-foreground focus:outline-none focus:border-primary"
                    >
                      <option value="">Chọn danh mục</option>
                      {categories.map(c => (
                        <option key={c.id} value={c.id}>{c.name}</option>
                      ))}
                    </motion.select>
                  )}
                </AnimatePresence>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-muted uppercase tracking-[0.2em] px-2 flex items-center gap-2">
                    <Calendar className="w-3 h-3" /> Tháng
                  </label>
                  <select 
                    value={formData.month}
                    onChange={(e) => setFormData({...formData, month: e.target.value})}
                    className="auth-input h-14 w-full bg-card border border-border rounded-xl px-4 text-foreground focus:outline-none focus:border-primary"
                  >
                    {months.map((m, i) => (
                      <option key={m} value={i + 1}>{m}</option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-muted uppercase tracking-[0.2em] px-2 flex items-center gap-2">
                     Năm
                  </label>
                  <input 
                    type="number" 
                    value={formData.year}
                    onChange={(e) => setFormData({...formData, year: e.target.value})}
                    className="auth-input h-14 w-full bg-card border border-border rounded-xl px-4 text-foreground focus:outline-none focus:border-primary" 
                  />
                </div>
              </div>
            </div>

            <button 
              type="submit" 
              className="w-full btn-primary py-6 rounded-3xl text-xl font-black tracking-tight flex items-center justify-center gap-3"
            >
              <Target className="w-6 h-6" /> Lưu giới hạn ngân sách
            </button>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
