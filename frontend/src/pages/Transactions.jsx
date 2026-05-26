import { useState, useEffect } from 'react';
import { transactionService, categoryService, reportService } from '../services/api';
import { Search, Plus, Filter, Trash2, Calendar, MoreHorizontal, FileDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import TransactionModal from '../components/TransactionModal';
import toast from 'react-hot-toast';

export default function Transactions() {
  const [transactions, setTransactions] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isTxModalOpen, setIsTxModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  // const [isExporting, setIsExporting] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleDelete = async (id) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa giao dịch này?')) {
      try {
        await transactionService.delete(id);
        toast.success('Xóa giao dịch thành công');
        fetchTransactions();
      } catch (err) {
        toast.error('Lỗi khi xóa giao dịch');
      }
    }
  };

  // const handleExportPDF = async () => {
  //   try {
  //     setIsExporting(true);
  //     const today = new Date();
  //     const firstDay = new Date(today.getFullYear(), today.getMonth(), 1).toISOString().split('T')[0];
  //     const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0).toISOString().split('T')[0];
      
  //     const response = await reportService.getMonthlyReport(firstDay, lastDay);
  //     const url = window.URL.createObjectURL(new Blob([response.data]));
  //     const link = document.createElement('a');
  //     link.href = url;
  //     link.setAttribute('download', `bao_cao_${firstDay}_den_${lastDay}.pdf`);
  //     document.body.appendChild(link);
  //     link.click();
  //     link.remove();
  //     toast.success('Xuất báo cáo thành công');
  //   } catch (err) {
  //     console.error(err);
  //     toast.error('Lỗi khi xuất báo cáo (Tính năng có thể đang hoàn thiện)');
  //   } finally {
  //     setIsExporting(false);
  //   }
  // };

  useEffect(() => {
    fetchTransactions();
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const { data } = await categoryService.getAll();
      setCategories(data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleAddTransaction = async (txData) => {
    try {
      await transactionService.create(txData);
      setIsTxModalOpen(false);
      fetchTransactions();
      toast.success('Thêm giao dịch thành công');
    } catch (err) {
      console.error(err);
    }
  };

  const fetchTransactions = async () => {
    try {
      const { data } = await transactionService.getAll(0, 50);
      setTransactions(data.content || []);
    } catch (err) {
      console.error(err);
    } finally {
      setTransactions(prev => Array.isArray(prev) ? prev : []);
      setLoading(false);
    }
  };

  const filteredTransactions = transactions.filter(t => 
    (t.description || '').toLowerCase().includes(searchQuery.toLowerCase()) || 
    (t.categoryName || '').toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-10 pb-20"
    >
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="text-4xl font-black text-foreground tracking-tight mb-2">Giao dịch</h1>
          <p className="text-muted text-lg font-medium">Theo dõi và quản lý tất cả các hoạt động tài chính của bạn một cách chính xác.</p>
        </div>
        <button 
          onClick={() => setIsTxModalOpen(true)}
          className="btn-primary flex items-center gap-2 group shadow-primary/20 shadow-lg"
        >
          <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform" /> 
          Thêm Giao dịch
        </button>
      </div>

      <TransactionModal 
        isOpen={isTxModalOpen}
        onClose={() => setIsTxModalOpen(false)}
        onSave={handleAddTransaction}
        categories={categories}
      />

      {/* Toolbar */}
      <div className="flex flex-col md:flex-row gap-4 items-stretch">
        <div className="flex-1 relative group">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-muted w-5 h-5 group-focus-within:text-primary transition-colors" />
          <input 
            type="text" 
            placeholder="Tìm kiếm giao dịch..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-card border border-border rounded-2xl pl-12 pr-6 h-14 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all font-medium shadow-sm" 
          />
        </div>
        <div className="flex gap-4">
          {/* <button 
            onClick={handleExportPDF}
            disabled={isExporting}
            className="flex items-center gap-2 h-14 px-6 rounded-2xl bg-primary/5 border border-primary/20 text-primary font-bold hover:bg-primary/10 transition-all shadow-sm"
          >
            {isExporting ? (
               <div className="w-4 h-4 border-2 border-primary/20 border-t-primary rounded-full animate-spin" />
            ) : (
               <FileDown className="w-4 h-4" />
            )}
            Xuất PDF
          </button> */}
        </div>
      </div>

      {/* Table Section */}
      <div className="glass-card overflow-hidden shadow-xl border border-border">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-secondary/50 border-b border-border">
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-muted">Mô tả</th>
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-muted">Danh mục</th>
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-muted">Ngày</th>
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-muted text-right">Số tiền</th>
                <th className="px-8 py-5"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/50">
              <AnimatePresence>
                {filteredTransactions.length > 0 ? filteredTransactions.map((t, idx) => (
                  <motion.tr 
                    layout
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.02 }}
                    key={t.id} 
                    className="hover:bg-primary/[0.02] transition-colors group"
                  >
                    <td className="px-8 py-5">
                      <div className="flex items-center gap-4">
                        <div className={`w-2.5 h-2.5 rounded-full ${t.type === 'INCOME' ? 'bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.4)]' : 'bg-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.4)]'}`} />
                        <p className="font-extrabold text-foreground group-hover:text-primary transition-colors truncate max-w-[200px]">{t.description || 'Giao dịch chung'}</p>
                      </div>
                    </td>
                    <td className="px-8 py-5">
                      <span className="px-3 py-1 bg-secondary border border-border rounded-lg text-[10px] font-black text-muted uppercase tracking-wider group-hover:border-primary/20 transition-colors">
                        {t.categoryName}
                      </span>
                    </td>
                    <td className="px-8 py-5">
                      <div className="flex items-center gap-2 text-muted text-xs font-bold">
                        <Calendar className="w-3.5 h-3.5 opacity-40" /> {t.transactionDate}
                      </div>
                    </td>
                    <td className="px-8 py-5 text-right">
                      <p className={`text-lg font-black tracking-tight ${t.type === 'INCOME' ? 'text-emerald-500' : 'text-rose-500'}`}>
                        {t.type === 'INCOME' ? '+' : '-'}{t.amount?.toLocaleString('vi-VN')} VNĐ
                      </p>
                    </td>
                    <td className="px-8 py-5 text-right">
                      <div className="flex justify-end gap-1 opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0">
                        <button 
                          onClick={() => handleDelete(t.id)}
                          className="p-2.5 hover:bg-rose-500/10 rounded-xl text-muted hover:text-rose-500 transition-all font-bold"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </motion.tr>
                )) : null}
              </AnimatePresence>
            </tbody>
          </table>
          
          {filteredTransactions.length === 0 && !loading && (
            <div className="py-24 text-center">
              <div className="w-20 h-20 bg-secondary rounded-[24px] flex items-center justify-center mx-auto mb-6 border border-border">
                <Search className="w-8 h-8 text-muted" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-1">Không tìm thấy giao dịch nào</h3>
              <p className="text-muted text-sm font-medium max-w-xs mx-auto">Hãy thử điều chỉnh bộ lọc hoặc từ khóa tìm kiếm.</p>
            </div>
          )}
        </div>
      </div>
      
      <div className="flex justify-between items-center px-4 pt-4">
        <p className="text-muted text-xs font-black uppercase tracking-widest">Hiển thị {filteredTransactions.length} bản ghi</p>
      </div>
    </motion.div>
  );
}
